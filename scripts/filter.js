class FilterGallery {

    constructor() {
      this.$filtermenuList = $('.filtermenu li');
      this.$container = $('.filter-container');
  
      this.updateMenu('all');
      this.$filtermenuList.on('click', $.proxy(this.onClickFilterMenu, this));
    }
  
    onClickFilterMenu(event) {
      const $target = $(event.target);
      const targetFilter = $target.data('filter');
  
      this.updateMenu(targetFilter);
      this.updateGallery(targetFilter);
    }
  
    updateMenu(targetFilter) {
      this.$filtermenuList.removeClass('active');
      this.$filtermenuList.each((index, element) => {
        const targetData = $(element).data('filter');
  
        if (targetData === targetFilter) {
          $(element).addClass('active');
        }
      });
    }
  
    updateGallery(targetFilter) {
  
      if (targetFilter === 'all') {
        this.$container.fadeOut(300, () => {
          $('.post').show();
          this.$container.fadeIn();
        });
      } else {
        this.$container.find('.post').each((index, element) => {
          this.$container.fadeOut(300, () => {
            if ($(element).hasClass(targetFilter)) {
              $(element).show();
            } else {
              $(element).hide();
            }
            this.$container.fadeIn();
          });
        });
      }
    }}
  
  
  const fliterGallery = new FilterGallery();