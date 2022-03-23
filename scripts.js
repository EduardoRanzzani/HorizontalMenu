const selectElement = (element) => document.querySelector(element);

const menuList = [
  { idMenu: 1, descricao: 'Usuários', url: 'usuario', nivel: 1, menuPai: null, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 2, descricao: 'Perfis', url: 'perfil', nivel: 1, menuPai: null, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 3, descricao: 'Menus', url: 'menu', nivel: 1, menuPai: null, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 4, descricao: 'Listagem de Usuários', url: 'usuario-list', nivel: 2, menuPai: 1, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 5, descricao: 'Formulário de Usuários', url: 'usuario-form', nivel: 2, menuPai: 1, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 6, descricao: 'Listagem de Perfis', url: 'perfil-list', nivel: 2, menuPai: 2, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 7, descricao: 'Formulário de Perfis', url: 'perfil-form', nivel: 2, menuPai: 2, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 8, descricao: 'Listagem de Menus', url: 'menu-list', nivel: 2, menuPai: 3, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 9, descricao: 'Formulário de Menus', url: 'menu-form', nivel: 2, menuPai: 3, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
  { idMenu: 10, descricao: 'Terceiro Nível', url: '', nivel: 3, menuPai: 9, dhCriacao: '22/03/2022', matriculaCriacao: 'Z236415' },
];

const menu = selectElement('ul.nav-list');
const firstLevel = menuList.filter(item => !item.menuPai);
firstLevel.map(buildTree).forEach(li => menu.append(li));
console.log(firstLevel);

function buildTree(item) {
  const li = document.createElement('li');
  const link = document.createElement('a');

  link.innerHTML = item.descricao;
  link.href = item.url;
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