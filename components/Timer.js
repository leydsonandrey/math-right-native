import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export const Timer = ({ style }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (seconds > 59) {
    setMinutes(minutes + 1)
    setSeconds(0)
  }

  return (
    <View>
      <Text style={style}>Tempo{"\n"}{minutes}:{seconds}</Text>
    </View>
  );
};

