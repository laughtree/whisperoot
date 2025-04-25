import { useState } from 'react';
import { createGroup } from '../utils/GroupUtil';
import InputBox from './InputBox';
import IconTextButton from './IconTextButton';

function CreateGroupBlock({}) {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [groupId, setGroupId] = useState('');

    return (
        <div className='create-group-box'>
            <h2>Create a new group</h2>
            <InputBox
                hint={"Group Name"}
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
            />
            <InputBox
                hint={"Group Description"}
                value={groupDescription}
                onChange={(e) => setGroupDescription(e.target.value)}
                type={"text"}
            />
            <IconTextButton
                text={"Create"}
                iconPath={""}
                onClick={() => {
                    createGroup(groupName, groupDescription, groupId);
                    setGroupName('');
                    setGroupDescription('');
                    setGroupId('');
                }}
            />
        </div>
    )
}

export default CreateGroupBlock;