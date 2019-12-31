export default function initNavtabs() {
    const linksTab = document.querySelectorAll('[data-anime="tabnav-nav"] li');
    const contentTab = document.querySelectorAll('[data-anime="tabnav-content"] section');

    linksTab[0].classList.add('active');
    contentTab[0].classList.add('active');

    function activeTab(index) {
        contentTab.forEach((item, index) => {
            item.classList.remove('active');
            linksTab[index].classList.remove('active'); //aproveitando o index para adicinar a classe ativo no link clicado
        });

        contentTab[index].classList.add('active');
        linksTab[index].classList.add('active');
    }

    linksTab.forEach((link, index) => {
        link.addEventListener('click', function() {
            activeTab(index);
        });
    })
}
