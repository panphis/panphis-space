import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export interface ProjectItemProps {
  title: string;
  description: string;
  href?: string;
  cover: string;
  tags: string[];
}

export function ProjectItem({
  title,
  description,
  href = '',
  cover,
  tags,
}: ProjectItemProps) {
  return (
    <div className="group flex flex-col items-start overflow-hidden rounded-lg shadow transition-transform hover:scale-110 hover:shadow-lg">
      <Link href={href} target="_blank">
        <div className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-gradient-to-tl from-[#757F9A] to-[#D7DDE8]">
          <Image
            src={cover}
            loading="lazy"
            alt={title}
            width={400}
            height={300}
            className="aspect-[4/3] size-full rounded-md object-cover transition-all group-hover:scale-110 group-hover:brightness-90"
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-sm">{description}</p>
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}