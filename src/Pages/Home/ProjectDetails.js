
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams();

    return (
        <div>
            <h1>details of my projects:{projectId}</h1>
        </div>
    );
};

export default ProjectDetails;