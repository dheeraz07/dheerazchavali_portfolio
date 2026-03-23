import { NextRequest, NextResponse } from "next/server";
import { buildKnowledgeBase, getLocalAnswer } from "@/lib/chatbot-knowledge";

export const runtime = "edge";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
}

const SYSTEM_PROMPT = `You are a friendly, professional portfolio assistant for Shanmukha Sai Dheeraz Chavali (Dheeraz). 
Answer questions about his background, skills, experience, projects, and education using ONLY the knowledge base below.
Be concise but informative. Use markdown formatting for readability.
If the question is outside the scope of the portfolio, politely redirect.
Never invent information not present in the knowledge base.

KNOWLEDGE BASE:
`;

export async function POST(req: NextRequest) {
  try {
    const body: ChatRequestBody = await req.json();
    const { messages } = body;

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content ?? "";
    const openaiKey = process.env.OPENAI_API_KEY;

    if (openaiKey) {
      const knowledgeBase = buildKnowledgeBase();

      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT + knowledgeBase },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ];

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: apiMessages,
            max_tokens: 500,
            temperature: 0.7,
          }),
        }
      );

      if (!response.ok) {
        const errData = await response.text();
        console.error("OpenAI API error:", errData);
        const fallback = getLocalAnswer(lastUserMessage);
        return NextResponse.json({ reply: fallback.answer, source: "local" });
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
      return NextResponse.json({ reply, source: "ai" });
    }

    const result = getLocalAnswer(lastUserMessage);
    return NextResponse.json({ reply: result.answer, source: "local" });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
