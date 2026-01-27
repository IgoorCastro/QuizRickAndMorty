type SubtitleProps = React.ComponentProps<"h2">;

export default function Subtitle({ children, ...rest }: SubtitleProps) {
    return(
        <h2 {...rest} >{children}</h2>
    )
}