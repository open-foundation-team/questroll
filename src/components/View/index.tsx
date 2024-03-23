// Style imports
import "./styles.scss";

// Component props
interface ViewProps {
    children?: React.ReactNode;
}


// Component declaration and export
export const View = ({ children }: ViewProps) => {

    return (
        <div className="view-styled">
            {children}
        </div>
    );
};