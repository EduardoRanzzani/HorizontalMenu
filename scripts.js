const selectElement = (element) => document.querySelector(element);

const menuList = [
  { idMenu: 01, descricao: '1. Primeiro Nível', url: '', nivel: 1, menuPai: null, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 02, descricao: '2. Primeiro Nível', url: '', nivel: 1, menuPai: null, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 03, descricao: '3. Primeiro Nível', url: '', nivel: 1, menuPai: null, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 04, descricao: '1.1. Segundo Nível', url: '', nivel: 2, menuPai: 1, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 05, descricao: '1.2. Segundo Nível', url: 'usuario-form', nivel: 2, menuPai: 1, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 06, descricao: '2.1. Segundo Nível', url: 'perfil-list', nivel: 2, menuPai: 2, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 07, descricao: '2.2. Segundo Nível', url: 'perfil-form', nivel: 2, menuPai: 2, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 08, descricao: '3.1. Segundo Nível', url: 'menu-list', nivel: 2, menuPai: 3, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 09, descricao: '3.2. Segundo Nível', url: '', nivel: 2, menuPai: 3, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 10, descricao: '3.2.1. Terceiro Nível', url: 'level3', nivel: 3, menuPai: 9, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 11, descricao: '1.1.1. Terceiro Nível', url: 'level3', nivel: 3, menuPai: 4, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
];

const menu = selectElement('ul.nav-list');
const firstLevel = menuList.filter(item => !item.menuPai);
firstLevel.map(buildTree).forEach(li => menu.append(li));
console.log(firstLevel);

function buildTree(item) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.innerHTML = item.descricao;
  if (item.url !== '') {
    link.href = item.url;
  }
  li.append(link);

  const children = menuList.filter(child => child.menuPai === item.idMenu);

  if (children.length > 0) {
    li.addEventListener('click', event => {
      event.stopPropagation();
      event.target.classList.toggle('open');
    });

    li.classList.add('has-children');

    const subMenu = document.createElement('ul');
    subMenu.classList.add('sub-menu');
    children.map(buildTree).forEach(li => subMenu.append(li));
    li.append(subMenu);
  }
  return li;
}

selectElement('.menu-icons').addEventListener('click', () => {
  selectElement('nav').classList.toggle('active');
});