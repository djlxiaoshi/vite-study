import { useRequest } from '@umijs/hooks';
import { Button, Input, message } from 'antd';
import React, { useState } from 'react';

function changeUsername(username: string): Promise<{ success: boolean }> {
  console.log(username);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

export default () => {
  const [state, setState] = useState('');
  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState('');
        message.success(`The username was changed to "${params[0]}" !`);
      }
    }
  });

  return (
    <div>
      <Input
        onChange={e => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <Button onClick={() => run(state)} loading={loading}>
        Edit
      </Button>
    </div>
  );
};

