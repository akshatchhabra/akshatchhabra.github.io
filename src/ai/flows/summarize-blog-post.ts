'use server';

/**
 * @fileOverview A blog post summarization AI agent.
 *
 * - summarizeBlogPost - A function that handles the blog post summarization process.
 * - SummarizeBlogPostInput - The input type for the summarizeBlogPost function.
 * - SummarizeBlogPostOutput - The return type for the summarizeBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBlogPostInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The full text content of the blog post to summarize.'),
  title: z.string().describe('The title of the blog post.'),
});
export type SummarizeBlogPostInput = z.infer<typeof SummarizeBlogPostInputSchema>;

const SummarizeBlogPostOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the blog post, highlighting the key points and topics covered.'
    ),
  keywords: z
    .string()
    .describe(
      'A comma-separated list of keywords relevant to the blog post content.'
    ),
});
export type SummarizeBlogPostOutput = z.infer<typeof SummarizeBlogPostOutputSchema>;

export async function summarizeBlogPost(input: SummarizeBlogPostInput): Promise<SummarizeBlogPostOutput> {
  return summarizeBlogPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBlogPostPrompt',
  input: {schema: SummarizeBlogPostInputSchema},
  output: {schema: SummarizeBlogPostOutputSchema},
  prompt: `You are an AI assistant specializing in summarizing blog posts.

  Given the content of a blog post and its title, your task is to generate a concise summary and identify relevant keywords.

  Title: {{{title}}}
  Content: {{{blogPostContent}}}

  Summary:
  Keywords:`, // The LLM should return the summary and keywords
});

const summarizeBlogPostFlow = ai.defineFlow(
  {
    name: 'summarizeBlogPostFlow',
    inputSchema: SummarizeBlogPostInputSchema,
    outputSchema: SummarizeBlogPostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
