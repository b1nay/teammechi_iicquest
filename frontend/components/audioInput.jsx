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
import { Pointer } from "lucide-react";

const audioSchema = z.object({
  audio: z
    .instanceof(File)
    .refine((val) => val instanceof File, {
      message: "Please select an audio file.",
    }),
});

export default function AudioInput(props) {
  const form = useForm({
    resolver: zodResolver(audioSchema),
    defaultValues: {
      audio: null,
    },
  });

  const onSubmit = async (data) => {
    props.handlesend(data);
   
  };

  return (
    <div className="w-full mx-auto flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3  space-y-6 flex flex-col items-center"
        >
          <FormField
            control={form.control}
            name="audio"
            render={({ field }) => (
              <FormItem className="text-center">
                <FormLabel>Audio File</FormLabel>
                <FormControl>
                  <div className="relative flex flex-col">
                 
                    <Input
                      className="pl-16 p-20 hover:cursor-pointer hover:bg-slate-200 transition-all ease-in-out "
                      type="file"
                      accept="audio/*"
                      onChange={(e) => field.onChange(e.target.files[0])} // Capture the first file
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Select an audio file to upload.
                </FormDescription>
                <FormMessage>
                  {form.formState.errors.audio?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button
            className="p-8 bg-sky-500 hover:bg-sky-600 flex flex-row gap-4 w-2/5 text-xl transition-all ease-in-out"
            type="submit"
          >
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
