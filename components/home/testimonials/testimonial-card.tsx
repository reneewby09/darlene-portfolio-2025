import { memo } from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

interface testimonialCardProps {
  name: string;
  role: string;
  content?: string;
  contentBefore?: string;
  image?: string;
  contentAfter?: string;
  avatar?: string;
}

export const TestimonialCard = memo(function TestimonialCard({
  name,
  role,
  content,
  contentBefore,
  image,
  contentAfter,
  avatar,
}: testimonialCardProps) {
  return (
    <Card className="border-none bg-white/90 dark:bg-black/40">
      <CardBody className="p-6 flex flex-col">
        <div>
          <Icon className="w-8 h-8 text-primary-500 mb-4" icon="lucide:quote" />
          {contentBefore ? (
            <div className="text-foreground-600 mb-6 italic">
              <p>&ldquo;{contentBefore}&rdquo;</p>
              {image && (
                <img
                  alt="Content"
                  className="my-4 rounded-lg w-full"
                  src={image}
                />
              )}
              <p>&ldquo;{contentAfter}&rdquo;</p>
            </div>
          ) : (
            <p className="text-foreground-600 mb-6 italic">
              &ldquo;{content}&rdquo;
            </p>
          )}
        </div>
        <div className="flex items-center gap-4 mt-auto">
          {avatar && (
            <Avatar
              className="ring-2 ring-primary-200"
              size="lg"
              src={avatar}
            />
          )}
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-foreground-500">{role}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
