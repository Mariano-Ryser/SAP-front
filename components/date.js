export function dateDay () {
    const current = new Date();
    const datee = `${current.getDate()} / ${current.getMonth()+1} / ${current.getFullYear()}`;

    return datee
  }

