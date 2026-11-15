(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var e = document.querySelectorAll(`section + section > div > div`);
document.querySelectorAll(`section + section > div `);
var t = document.querySelector(`section`);
document.createElement(`div`);
var n = !1,
  r = 0,
  i = 0,
  a = 0,
  o = 0,
  s = 0,
  c = 0,
  l = 0,
  u = !1,
  d = [],
  f = ``;
function p() {
  e.forEach((e) => {
    (e.classList.remove(`bg-red-500`, `bg-yellow-400`), e.classList.add(`bg-white`));
  });
}
function m(e) {
  let t = document.createElement(`div`);
  (t.classList.add(
    `w-4/5`,
    `h-4/5`,
    `rounded-full`,
    `cursor-none`,
    `pointer-events-none`,
    n ? `bg-red-500` : `bg-yellow-400`,
  ),
    e.currentTarget.childNodes.length < 1 && e.currentTarget.appendChild(t));
}
function h() {
  return n ? `bg-yellow-400` : `bg-red-500`;
}
function g(t) {
  let p = t.target.id,
    m = [35, 28, 21, 14, 7, 0],
    g = [36, 29, 22, 15, 8, 1],
    v = [37, 30, 23, 16, 9, 2],
    y = [38, 31, 24, 17, 10, 3],
    b = [39, 32, 25, 18, 11, 4],
    x = [40, 33, 26, 19, 12, 5],
    S = [41, 34, 27, 20, 13, 6];
  ((d = [m, g, v, y, b, x, S]), (n = !n));
  let C = 0,
    w = 0,
    T = 0,
    E = h();
  if (u) _.textContent = f == `bg-red-500` ? `GANARON LOS ROJOS` : `GANARON LOS AMARILLOS`;
  else
    switch (p) {
      case `0`:
        if (r != 6) {
          (e[m[r]].classList.remove(`bg-white`), e[m[r++]].classList.add(E), (C = 0), (w = 0));
          for (let t = 0; t <= 3 && e[d[t][r - 1]]?.classList.contains(E); t++) C++;
          for (let t = 0; t < 5; t++) e[d[0][r - t - 1]]?.classList.contains(E) && w++;
          (C >= 4 || w >= 4) && ((u = !0), (f = E));
        }
        break;
      case `1`:
        if (i != 6) {
          (e[g[i]].classList.remove(`bg-white`),
            e[g[i++]].classList.add(E),
            (C = 0),
            (w = 0),
            (T = 0));
          for (let t = 1; t <= 4 && e[d[t][i - 1]]?.classList.contains(E); t++) T++;
          for (let t = 0; t <= 4 && e[d[t][i - 1]]?.classList.contains(E); t++) C++;
          for (let t = 0; t < 5; t++) e[d[1][i - t - 1]]?.classList.contains(E) && w++;
          (C >= 4 || w >= 4 || T >= 4) && ((u = !0), (f = E));
        }
        break;
      case `2`:
        if (a != 6) {
          (e[v[a]].classList.remove(`bg-white`),
            e[v[a++]].classList.add(E),
            (C = 0),
            (w = 0),
            (T = 0));
          for (let t = 2; t <= 5 && e[d[t][a - 1]]?.classList.contains(E); t++) T++;
          for (let t = 0; t <= 3 && e[d[t][a - 1]]?.classList.contains(E); t++) C++;
          for (let t = 0; t < 5; t++) e[d[2][a - t - 1]]?.classList.contains(E) && w++;
          (C >= 4 || w >= 4 || T >= 4) && ((u = !0), (f = E));
        }
        break;
      case `3`:
        if (o != 6) {
          (e[y[o]].classList.remove(`bg-white`),
            e[y[o++]].classList.add(E),
            (C = 0),
            (w = 0),
            (T = 0));
          for (
            let t = 3;
            t <= 6 && (console.log(`Colum: ` + t), e[d[t][o - 1]]?.classList.contains(E));
            t++
          )
            (T++,
              e[d[2][o - 1]]?.classList.contains(E) && T++,
              e[d[1][o - 1]]?.classList.contains(E) && T++);
          for (
            let t = 0;
            t <= 4 && (console.log(`Colum: ` + t), e[d[t][o - 1]]?.classList.contains(E));
            t++
          )
            C++;
          for (let t = 0; t < 5; t++)
            (console.log(e[d[3][o - t - 1]]?.classList.contains(E)),
              e[d[3][o - t - 1]]?.classList.contains(E) && w++);
          (C >= 4 || w >= 4 || T >= 4) && ((u = !0), (f = E));
        }
        break;
      case `4`:
        if (s != 6) {
          (e[b[s]].classList.remove(`bg-white`),
            e[b[s++]].classList.add(E),
            (C = 0),
            (w = 0),
            (T = 0));
          for (
            let t = 4;
            t <= 6 && (console.log(`Colum: ` + t), e[d[t][s - 1]]?.classList.contains(E));
            t++
          )
            (T++,
              e[d[3][s - 1]]?.classList.contains(E) && T++,
              e[d[2][s - 1]]?.classList.contains(E) && T++);
          for (
            let t = 0;
            t <= 4 && (console.log(`Colum: ` + t), e[d[t][o - 1]]?.classList.contains(E));
            t++
          )
            C++;
          for (let t = 0; t < 5; t++) e[d[4][s - t - 1]]?.classList.contains(E) && w++;
          (C >= 4 || w >= 4 || T >= 4) && ((u = !0), (f = E));
        }
        break;
      case `5`:
        if (c != 6) {
          (e[x[c]].classList.remove(`bg-white`),
            e[x[c++]].classList.add(E),
            (C = 0),
            (w = 0),
            (T = 0));
          for (
            let t = 5;
            t <= 6 && (console.log(`Colum: ` + t), e[d[t][c - 1]]?.classList.contains(E));
            t++
          )
            (T++,
              e[d[4][c - 1]]?.classList.contains(E) && T++,
              e[d[4][c - 1]]?.classList.contains(E) && T++);
          for (
            let t = 3;
            t <= 6 && (console.log(`Colum: ` + t), e[d[t][c - 1]]?.classList.contains(E));
            t++
          )
            C++;
          for (let t = 0; t < 5; t++) e[d[5][c - t - 1]]?.classList.contains(E) && w++;
          (C >= 4 || w >= 4 || T >= 4) && ((u = !0), (f = E));
        }
        break;
      case `6`:
        if (l != 6) {
          (e[S[l]].classList.remove(`bg-white`), e[S[l++]].classList.add(E), (C = 0), (w = 0));
          for (let t = 3; t <= 6 && e[d[t][l - 1]]?.classList.contains(E); t++) C++;
          for (let t = 0; t < 5; t++) e[d[4][l - t - 1]]?.classList.contains(E) && w++;
          (C >= 4 || w >= 4) && ((u = !0), (f = E));
        }
    }
}
var _ = document.querySelector(`p`);
function v(e) {
  e.currentTarget.childNodes[0].remove();
}
document.querySelector(`button`).addEventListener(`click`, y);
function y() {
  ((n = !1),
    (r = 0),
    (i = 0),
    (a = 0),
    (o = 0),
    (s = 0),
    (c = 0),
    (l = 0),
    (u = !1),
    (d = []),
    (_.textContent = ``),
    (f = ``),
    p(),
    t.childNodes.forEach((e) => {
      (e.addEventListener(`mouseover`, m),
        e.addEventListener(`mouseout`, v),
        e.addEventListener(`mousedown`, g));
    }));
}
