"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { symptoms } from "./data";
import axios from "axios";

const FormSchema = z.object({
  symptoms: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one symptom.",
  }),
});

export default function Page() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      symptoms: [],
    },
  });

  const onSubmit = async (data) => {
    alert`hiiiii`;

    try {
        const response = await axios.post("/api/get-disorder", data);
  
        console.log("Detected Disorder: ", response.data.disorder);
        alert(`Detected Disorder: ${response.data.disorder}`);  
      } catch (error) {
        console.error("Error determining disorder: ", error);
      }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6  flex flex-col items-center justify-center mx-auto w-5/6 mr-16 "
      >
        <FormField
          control={form.control}
          name="symptoms"
          render={() => (
            <FormItem>
              <div className="mb-4 flex flex-col items-center mt-6 self-center">
                <FormLabel className="text-2xl font-bold text-sky-500">
                  Diagnosis
                </FormLabel>
                <FormDescription>
                  Select the symptoms you are experiencing.
                </FormDescription>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-6">
                {symptoms.map((symptom, index) => (
                  <FormField
                    key={index}
                    control={form.control}
                    name="symptoms"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={index}
                          className=" items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(symptom)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, symptom])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== symptom
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {symptom}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 p-6 text-xl transition-all ease-in-out"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
