function etsInstaIsPreviewMode(){
  var url = new URL(window.location.href);
  var previewMode = url.searchParams.get('etsMMPreviewMode');
  if(previewMode)
  {
    return true;
  }
  return false
}
var ETS_MM_CONFIG = {
  navigator: etsInstaIsPreviewMode() ? "main-menu" : "main-menu",
  use_embeddedcode: etsInstaIsPreviewMode() ? 0 : 0,
  show_class_mobile: etsInstaIsPreviewMode() ? 0 : 0,
  menu_enabled: etsInstaIsPreviewMode() ? 1 : 0
};
