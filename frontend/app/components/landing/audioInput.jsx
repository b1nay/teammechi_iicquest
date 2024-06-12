"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const audioSchema = z.object({
  audio: z.instanceof(File, "Please provide a valid audio file."),
});

export default function AudioInput() {
  const form = useForm({
    resolver: zodResolver(audioSchema),
    defaultValues: {
      audio: null,
    },
  });

  function onSubmit(data) {
    console.log("data: ", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="audio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Audio File</FormLabel>
              <FormControl>
                <Input type="file" multiple accept="audio/*" {...field} />
              </FormControl>
              <FormDescription>Select an audio file to upload.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
}
