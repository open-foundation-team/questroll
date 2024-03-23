// Style imports
import './styles.scss';

// Component props
interface DieProps {
    dieType: 2 | 4 | 6 | 8 | 10 | 12 | 20 | 100;
    rolls?: number;
    onClick: () => void;
}


// Component declaration and export
export const Die = ({ dieType, rolls, onClick }: DieProps) => {

    return (
        <div className="die-styled" onClick={() => onClick()}>
            {rolls ?
                <span className="die-rolls">{rolls}</span>
                :
                <></>
            }
            <p className="die-value">
                {dieType}
            </p>
        </div>
    );
};