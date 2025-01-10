import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate recommended goals, tasks, or steps based on user input.
 * @param {string} prompt - The prompt to guide the AI.
 * @returns {Promise<string>} - The AI's response.
 */
export const generateRecommendations = async (
  prompt: string
): Promise<string> => {
  const MAX_RESPONSE_TOKENS = 300;
  const MAX_INPUT_TOKENS = 4096 - MAX_RESPONSE_TOKENS;

  if (prompt.length > MAX_INPUT_TOKENS) {
    throw new Error(
      "Prompt exceeds token limit. Please provide a shorter input."
    );
  }

  console.log("Prompt:", prompt); // Log prompt for debugging

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
            You are Momentum, an AI assistant focused on helping users achieve their goals. 
            Provide exactly 5 concise, actionable steps or tasks based on the user's input.
            Do not add any additional comments or introductory text. 
            Output should be a numbered list of actions. 
          `,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: MAX_RESPONSE_TOKENS,
    });

    const messageContent = response.choices?.[0]?.message?.content;

    if (!messageContent) {
      throw new Error("Failed to generate recommendations.");
    }

    return messageContent.trim();
  } catch (error: any) {
    if (error.response) {
      console.error("OpenAI API Error:", error.response.data);
    } else {
      console.error("Unexpected Error:", error.message);
    }

    if (error.code === "rate_limit_exceeded") {
      throw new Error("Rate limit exceeded. Please try again later.");
    }
    if (error.code === "insufficient_quota") {
      throw new Error(
        "API quota exceeded. Please check your usage or billing details."
      );
    }

    throw new Error("Failed to generate recommendations.");
  }
};
