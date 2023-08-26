import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export const Timer = ({ style }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text style={style}>T {seconds}</Text>
    </View >
  );
};

