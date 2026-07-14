"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQ_PAGE } from "@/config/ui_config"

type FaqItem = {
  question: string
  answer: string
  sources?: { label: string; url: string }[]
}

const { styling } = FAQ_PAGE
const FAQ_list = FAQ_PAGE.FAQ_list as FaqItem[]

// A single external source link that highlights on hover (colors from config).
function SourceLink({ label, url }: { label: string; url: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? styling.sources.hoverFontColor : styling.sources.fontColor,
        fontSize: `${styling.sources.fontSize}px`,
        textDecoration: "underline",
        transition: "color 150ms",
      }}
    >
      {label}
    </a>
  )
}

/**
 * Vertical list of FAQ items. Each item toggles open/closed independently.
 * All styling is pulled from FAQ_PAGE.styling in config/ui_config.ts.
 */
export function FaqList() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set())
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div
      className="mx-auto w-full flex flex-col"
      style={{ maxWidth: `${styling.maxWidth}px`, gap: `${styling.gap}px` }}
    >
      {FAQ_list.map((item, index) => {
        const isOpen = openIndexes.has(index)
        const isHovered = hoveredIndex === index

        return (
          <div
            key={index}
            style={{
              backgroundColor: isHovered ? styling.item.hoverFillColor : styling.item.fillColor,
              border: `${styling.item.borderWidth}px solid ${styling.item.borderColor}`,
              borderRadius: `${styling.item.borderRadius}px`,
              paddingLeft: `${styling.item.paddingLeft}px`,
              paddingRight: `${styling.item.paddingRight}px`,
              paddingTop: `${styling.item.paddingTop}px`,
              paddingBottom: `${styling.item.paddingBottom}px`,
              transition: "background-color 150ms",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
              style={{
                color: styling.question.fontColor,
                fontSize: `${styling.question.fontSize}px`,
                fontWeight: styling.question.fontWeight,
              }}
            >
              <span>{item.question}</span>
              <ChevronDown
                aria-hidden
                style={{
                  color: styling.icon.color,
                  width: `${styling.icon.size}px`,
                  height: `${styling.icon.size}px`,
                  flexShrink: 0,
                  transition: "transform 200ms",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {isOpen && (
              <>
                <p
                  style={{
                    color: styling.answer.fontColor,
                    fontSize: `${styling.answer.fontSize}px`,
                    lineHeight: styling.answer.lineHeight,
                    paddingTop: `${styling.answer.paddingTop}px`,
                  }}
                >
                  {item.answer}
                </p>

                {item.sources && item.sources.length > 0 && (
                  <div
                    className="flex flex-wrap items-center gap-x-2 gap-y-1"
                    style={{ paddingTop: `${styling.sources.paddingTop}px` }}
                  >
                    <span style={{ color: styling.sources.labelColor, fontSize: `${styling.sources.fontSize}px` }}>
                      {styling.sources.label}
                    </span>
                    {item.sources.map((source, sourceIndex) => (
                      <span key={source.url} className="flex items-center gap-2">
                        <SourceLink label={source.label} url={source.url} />
                        {sourceIndex < item.sources!.length - 1 && (
                          <span style={{ color: styling.sources.labelColor, fontSize: `${styling.sources.fontSize}px` }}>
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
