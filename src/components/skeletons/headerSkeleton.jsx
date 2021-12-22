import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './index.scss';

const SkeletonCard = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
                <Skeleton count={3}/>
            </p>
        </SkeletonTheme>
    )
};
export default SkeletonCard;