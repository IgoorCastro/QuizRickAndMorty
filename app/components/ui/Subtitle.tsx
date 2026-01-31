type SubtitleProps = React.ComponentProps<"h2">;

export default function Subtitle({ children, ...rest }: SubtitleProps) {
    return(
        <h3 {...rest} >{children}</h3>
    )
}