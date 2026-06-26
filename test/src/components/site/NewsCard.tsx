import { ArrowRight, Calendar } from "lucide-react";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  meta?: string;
  gallery: string[];
}

export function NewsCard({ item, onOpen }: { item: NewsItem; onOpen: (id: string) => void }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:shadow-elevated">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          width={1200}
          height={750}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        {item.meta ? (
          <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Calendar className="size-3.5" />
            {item.meta}
          </div>
        ) : null}
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <button
          type="button"
          onClick={() => onOpen(item.id)}
          className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-blue-accent hover:text-brand transition-colors"
        >
          View Details
          <ArrowRight className="size-4" />
        </button>
      </div>
    </article>
  );
}
