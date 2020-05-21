export function getUserInitial({userName}) {
  const parts = userName ? userName.split(/[ -]/) : [];
  let initials = '';
  for (let i = 0; i < parts.length; i += 1) {
    initials += parts[i].charAt(0);
  }
  if (initials.length > 2 && initials.search(/[A-Z]/) !== -1) {
    initials = initials.replace(/[a-z]+/g, '');
  }
  initials = initials.substr(0, 2).toUpperCase();
  return initials;
}

export const getContainerStyle = function({size, rounded}) {
  return {
    width: size,
    height: size,
    borderRadius: rounded ? size : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };
};

export const getTextStyle = function({size, textColor, fontSize}) {
  return {
    color: textColor,
    fontSize: fontSize ? fontSize : size / 2,
    fontWeight: '500',
  };
};

export const getRandomColor = function({userName, backgroundColors}) {
  if (backgroundColors.length) {
    return backgroundColors[
      Math.floor(Math.random() * backgroundColors.length)
    ];
  }
  let hash = 0;

  for (let i = 0; i < userName.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = userName.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';

  for (let i = 0; i < 3; i++) {
    // eslint-disable-next-line no-bitwise
    let value = (hash >> (i * 8)) & 0xff;

    color += ('00' + value.toString(16)).substr(-2);
  }

  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, value =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(value, 16) + -20)).toString(16)
        ).substr(-2),
      )
  );
};
