

export function Interpolations(data,animation,CARD_WIDTH) {
    data?.map((marker, index) => {
        const inputRange = [
          (index - 1) * CARD_WIDTH,
          index * CARD_WIDTH,
          (index + 1) * CARD_WIDTH,
        ];
        const scale = animation.interpolate({
          inputRange,
          outputRange: [1, 2, 1],
          extrapolate: 'clamp',
        });
        const opacity = animation.interpolate({
          inputRange,
          outputRange: [0.35, 1, 0.35],
          extrapolate: 'clamp',
        });
        return {scale, opacity};
      })
}