import * as React from "react";
import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card(props: DivProps) {
  return (
    <div
      data-slot="card"
      className={cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", props.className)}
      {...props}
    />
  );
}

export function CardHeader(props: DivProps) {
  return (
    <div
      data-slot="card-header"
      className={cn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", props.className)}
      {...props}
    />
  );
}

export function CardTitle(props: DivProps) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", props.className)}
      {...props}
    />
  );
}

export function CardDescription(props: DivProps) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", props.className)}
      {...props}
    />
  );
}

export function CardAction(props: DivProps) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", props.className)}
      {...props}
    />
  );
}

export function CardContent(props: DivProps) {
  return (
    <div data-slot="card-content" className={cn("px-6", props.className)} {...props} />
  );
}

export function CardFooter(props: DivProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", props.className)}
      {...props}
    />
  );
}
