import { CoursePart } from '../types';

interface PartProps {
  coursePart: CoursePart;
}

const assertNever = (value: never): never =>{
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
}

const Part = (props: PartProps) => {
  const { coursePart } = props;
  switch (coursePart.kind) {
    case 'basic':
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <p>{coursePart.description}</p>
        </div>
      );
    case 'group':
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <p>Project Exercises {coursePart.groupProjectCount}</p>
        </div>
      );
    case 'background':
      return (
        <div>
          <h3>
            {coursePart.name} {coursePart.exerciseCount}
          </h3>
          <p>{coursePart.description}</p>
          <p>Submit to {coursePart.backgroundMaterial}</p>
        </div>
      );
    case 'special':
        return (
            <div>
              <h3>
                {coursePart.name} {coursePart.exerciseCount}
              </h3>
              <p>{coursePart.description}</p>
              <p>Required skills: {coursePart.requirements.map(requirement => `${requirement}, `)}</p>
            </div>
          );
    default:
        return assertNever(coursePart);
  }
};

export default Part;
