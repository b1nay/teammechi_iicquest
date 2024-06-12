"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const textSchema = z.object({
  textfile: z.string().min(1, "Please enter some text."),
})

export default function TextInput() {
  const form = useForm({
    defaultValues: {
      textfile: "",
    },
    resolver: zodResolver(textSchema),
  })

  function onTextSubmit(data) {
    console.log("data: ", data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onTextSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="textfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text File</FormLabel>
              <FormControl>
                <Input placeholder="Enter text here" {...field} />
              </FormControl>
              <FormDescription>Enter text content.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send</Button>
      </form>
    </Form>
  )
}