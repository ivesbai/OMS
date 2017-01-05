/**
 * Created by ives on 2016/12/30.
 */

Template.profile.onRendered(function () {

  var image = this.$('img.avatar').get(0);
  var cropper = new Cropper(image, {
    aspectRatio: 1 / 1,
    ready: function () {
      //this.cropper.move(1, -1);
      // Allows chain composition

      //this.cropper.move(1, -1).rotate(45).scale(1, -1);
      SmartCrop.crop(image, {width: 100, height: 100}).then(function(result){
        console.log(result);
        //this.cropper.moveTo(result.topCrop.x, result.topCrop.y);
      }.bind(this));
    },
    crop: function(e) {
      // console.log(e.detail.x);
      // console.log(e.detail.y);
      // console.log(e.detail.width);
      // console.log(e.detail.height);
      // console.log(e.detail.rotate);
      // console.log(e.detail.scaleX);
      // console.log(e.detail.scaleY);
    }
  });
  console.log(jQuery('#start_time'));
  //jQuery.datetimepicker.setLocale('en');
  jQuery('#start_time').datetimepicker();
});
