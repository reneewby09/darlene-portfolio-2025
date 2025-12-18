import { useRef, useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ProjectsTabsProps } from "@/components/projects/types";

export const ProjectsTabs = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProjectsTabsProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    const onMouseDown = (e: MouseEvent) => {
      // Allow native scrollbar dragging; if the click is on the scrollbar area, let default behavior occur
      const scrollbarHeight = el.offsetHeight - el.clientHeight;
      const isOnScrollbar = scrollbarHeight > 0 && e.offsetY > el.clientHeight;
      if (isOnScrollbar || e.button !== 0) return;

      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollStart = el.scrollLeft;
      el.style.cursor = "grabbing";
    };

    const onMouseLeave = () => {
      isDown = false;
      el.style.cursor = "grab";
    };

    const onMouseUp = () => {
      isDown = false;
      el.style.cursor = "grab";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;
      el.scrollLeft = scrollStart - walk;
    };

    const onScroll = () => {
      checkScroll();
    };

    el.style.cursor = "grab";
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("scroll", onScroll);
    
    checkScroll();

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="relative w-full mb-8">
      {canScrollLeft && (
        <Button
          isIconOnly
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          size="sm"
          variant="flat"
          onPress={scrollLeft}
        >
          <Icon icon="lucide:chevron-left" width={20} />
        </Button>
      )}
      
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden w-full select-none scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-background"
      >
        <Tabs
          aria-label="Project Categories"
          className="flex w-max min-w-full justify-start md:justify-center mb-4"
          selectedKey={selectedCategory}
          variant="underlined"
          onSelectionChange={(key) => onSelectCategory(String(key))}
        >
          {categories.map((category) => (
            <Tab
              key={category}
              className="sm:text-base whitespace-nowrap"
              title={category}
            />
          ))}
        </Tabs>
      </div>

      {canScrollRight && (
        <Button
          isIconOnly
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          size="sm"
          variant="flat"
          onPress={scrollRight}
        >
          <Icon icon="lucide:chevron-right" width={20} />
        </Button>
      )}
      
      <p className="mt-1 text-xs text-center text-foreground-500">💡 Drag to scroll or use arrow buttons</p>
    </div>
  );
};
