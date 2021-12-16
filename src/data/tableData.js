// third party
import namor from 'namor';

// project imports
import { range } from 'utils/helper';

const newPerson = () => {
    const statusChance = Math.random();
    const getStatus = () => {
        if (statusChance > 0.66) {
            return 'relationship';
        }
        if (statusChance > 0.33) {
            return 'complicated';
        }
        return 'single';
    };

    return {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status: getStatus()
    };
};

export default function makeData(lens) {
    const count = [lens];

    const makeDataLevel = (depth = 0) => {
        const len = count[depth];
        return range(len).map(() => ({
            ...newPerson(),
            subRows: count[depth + 1] ? makeDataLevel(depth + 1) : undefined
        }));
    };

    return makeDataLevel();
}

export const TableData = [
    {
        id: 1,
        firstName: 'Mark',
        lastName: 'Otto',
        username: '@mdo'
    },
    {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        username: '@fat'
    },
    {
        id: 3,
        firstName: 'Larry',
        lastName: 'the Bird',
        username: '@twitter'
    },
    {
        id: 4,
        firstName: 'Larry',
        lastName: 'the Bird',
        username: '@twitter'
    }
];
