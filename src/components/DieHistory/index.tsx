// Style imports
import './styles.scss';

// Component props
interface DieHistoryProps {
    rolls: number[];
}


// Component declaration and export
export const DieHistory = ({ rolls }: DieHistoryProps) => {

    return (
        <div className="dieHistory-styled">
            {rolls.map((roll) => {

                return (
                    <div className="roll">
                        <div className="roll-symbol">
                            <div className="symbol" />
                        </div>
                        <div className="roll-number">
                            {roll}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};