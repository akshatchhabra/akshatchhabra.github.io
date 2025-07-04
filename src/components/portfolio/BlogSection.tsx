"use client";

import React, { useState } from 'react';
import Section from './Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, SubmitHandler } from 'react-hook-form';
import { summarizeBlogPost, SummarizeBlogPostInput, SummarizeBlogPostOutput } from '@/ai/flows/summarize-blog-post';
import { Loader2, Wand2, Lightbulb, Tags } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from "@/hooks/use-toast";

type FormValues = SummarizeBlogPostInput;

const sampleArticles = [
  {
    title: "The Art of Refactoring",
    description: "An in-depth look at code refactoring techniques for building maintainable and scalable software.",
    link: "#"
  },
  {
    title: "Navigating Microservices",
    description: "A guide to designing, building, and deploying microservice-based architectures effectively.",
    link: "#"
  },
];

export default function BlogSection() {
  const [summaryResult, setSummaryResult] = useState<SummarizeBlogPostOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setSummaryResult(null);
    try {
      const result = await summarizeBlogPost(data);
      setSummaryResult(result);
      reset();
    } catch (error) {
      console.error('Error summarizing blog post:', error);
      toast({
        title: "Error",
        description: "Failed to summarize the blog post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="blog" title="Blog" className="bg-primary/5">
      <div className="grid gap-16 lg:grid-cols-1 max-w-4xl mx-auto">
        <div className="space-y-8">
          <h3 className="font-headline text-3xl font-bold text-center lg:text-left">Recent Articles</h3>
          {sampleArticles.map((article, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto">
                  <a href={article.link}>Read More &rarr;</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/*
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                 <Wand2 className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle className="font-headline text-2xl">AI-Powered Summary</CardTitle>
                    <CardDescription>Paste an article title and content to get an instant summary.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <div>
                  <Input 
                    placeholder="Blog Post Title"
                    {...register('title', { required: 'Title is required.' })}
                    className="font-headline"
                  />
                  {errors.title && <p className="text-destructive text-sm mt-1">{errors.title.message}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Paste your blog post content here..."
                    rows={8}
                    {...register('blogPostContent', { required: 'Content is required.' })}
                  />
                  {errors.blogPostContent && <p className="text-destructive text-sm mt-1">{errors.blogPostContent.message}</p>}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Summarizing...
                    </>
                  ) : (
                    'Generate Summary'
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
          
          {(isLoading || summaryResult) && (
            <Card className="shadow-lg animate-in fade-in-50 duration-500">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Summary & Keywords</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {isLoading && !summaryResult && (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                )}
                {summaryResult && (
                  <>
                    <div>
                      <h4 className="flex items-center gap-2 font-headline text-lg font-semibold mb-2"><Lightbulb className="h-5 w-5 text-accent"/> Summary</h4>
                      <p className="text-muted-foreground">{summaryResult.summary}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 font-headline text-lg font-semibold mb-2"><Tags className="h-5 w-5 text-accent"/> Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {summaryResult.keywords.split(',').map((keyword, i) => (
                          <Badge key={i} variant="outline">{keyword.trim()}</Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </div>
        */}
      </div>
    </Section>
  );
}
