import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { PersonLink } from '../PersonLink/PersonLink';

import { Person } from '../../types';

type Props = {
  person: Person;
  mother?: Person;
  father?: Person;
};

export const PersonInfo: React.FC<Props> = ({ person }) => {
  const {
    slug,
    sex,
    born,
    died,
    motherName,
    fatherName,
    mother,
    father,
  } = person;

  const { personSlug } = useParams();

  const isSelected = slug === personSlug;

  return (
    <tr
      data-cy="person"
      key={slug}
      className={classNames(
        {
          'has-background-warning': isSelected,
        },
      )}
    >
      <td>
        <PersonLink person={person} />
      </td>

      <td>{sex}</td>
      <td>{born}</td>
      <td>{died}</td>
      <td>
        {mother
          ? (<PersonLink person={mother} />)
          : (
            motherName || '-'
          )}
      </td>

      <td>
        {father
          ? (<PersonLink person={father} />)
          : (
            fatherName || '-'
          )}
      </td>
    </tr>
  );
};