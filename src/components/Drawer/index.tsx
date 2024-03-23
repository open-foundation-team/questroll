// Style imports
import './styles.scss';

// Component props
interface DrawerProps {
    children?: React.ReactNode;
    showReset: boolean;
    resetFunction: () => void;
}


// Component declaration and export
export const Drawer = ({ children, showReset, resetFunction }: DrawerProps) => {

    return (
        <div className="drawer-styled">
            <div className="drawer-grid">
                {children}
            </div>
            {showReset ?
                <div className="reset-button" onClick={() => resetFunction()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9a9a9a" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>
                :
                <></>
            }
        </div>
    );
};