type TitleProps = React.ComponentProps<"h1">;

export default function Title({children}: TitleProps) {
    return (
        <h1>{children}</h1>
    );
};