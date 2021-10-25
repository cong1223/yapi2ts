import { FC, useState, useEffect, CSSProperties } from 'react'

interface Props {
  rows?: number
  cols?: number
  value?: string
  limit?: number
  showLimitText?: boolean
  placeholder?: string
  style?: CSSProperties
  className?: string
  onChange?: (text: string) => void
}

const LimitedTextarea: FC<Props> = (props) => {
  const {
    rows,
    cols,
    value = '',
    limit = 300,
    showLimitText = true,
    placeholder = 'please input text',
    style = {},
    className,
    onChange
  } = props
  const [content, setContent] = useState(value)

  const setFormattedContent = (text: string) => {
    const newVal = text.length > limit ? text.slice(0, limit) : text
    setContent(newVal)
    onChange?.(newVal)
  }

  useEffect(() => {
    setFormattedContent(content)
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <textarea
        className={className}
        style={style}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
      />
      {showLimitText && (
        <p>
          {content.length}/{limit}
        </p>
      )}
    </div>
  )
}

export default LimitedTextarea
