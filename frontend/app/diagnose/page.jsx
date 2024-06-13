"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";

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
import { LifeLine } from "react-loading-indicators";
import DiagnoseResult from "@/components/diagnoseResult/page";

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

  const [detectedDisorder, setDetectedDisorder] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post("/api/get-disorder", data);

      setDetectedDisorder(response.data.disorder);
    } catch (error) {
      console.error("Error determining disorder: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col text-center text-lg font-bold mt-28 text-sky-500">
        <LifeLine color="#0EA5E9" size="medium" text="" textColor="" />
        <p>Analyzing Audio Data...</p>
      </div>
    );
  }

  if (detectedDisorder) {
    return <DiagnoseResult detectedDisorder={detectedDisorder} />;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col items-center justify-center mx-auto w-5/6"
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
                      const isChecked = field.value?.includes(symptom);
                      return (
                        <FormItem
                          key={index}
                          className="items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={isChecked}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...field.value, symptom]
                                  : field.value.filter(
                                      (value) => value !== symptom
                                    );
                                field.onChange(newValue);
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
