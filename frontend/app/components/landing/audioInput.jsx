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
  audio: z
    .instanceof(File)
    .refine((val) => val instanceof File, { message: "Please select an audio file." }),
});

export default function AudioInput() {
  const form = useForm({
    resolver: zodResolver(audioSchema),
    defaultValues: {
      audio: null,
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('file', data.audio); // Append the selected audio file, 'file' should match the name used in your Flask app

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
                <Input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => field.onChange(e.target.files[0])} // Capture the first file
                />
              </FormControl>
              <FormDescription>Select an audio file to upload.</FormDescription>
              <FormMessage>{form.formState.errors.audio?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
}
