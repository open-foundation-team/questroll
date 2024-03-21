// Type imports
import { DieHistoryType } from '../../types';

// Style imports
import './styles.scss';

// Component props
interface DieHistoryProps {
    rolls: DieHistoryType[];
}


// Component declaration and export
export const DieHistory = ({ rolls }: DieHistoryProps) => {

    return (
        <div className="dieHistory-styled">
            {rolls.map((roll, idx) => {

                const isNegative = !(roll.value > 0);

                return (
                    <div className="roll" key={idx}>
                        <div className="roll-symbol">
                            {roll.type === 'roll' ?
                                <div className="symbol die" />
                                :
                                <div className="symbol">
                                    {!isNegative ? "+" : "-"}
                                </div>
                            }
                        </div>
                        <div className="roll-number">
                            {isNegative ? roll.value * -1 : roll.value}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};