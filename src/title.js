import {UIContainerPlugin, Events } from 'clappr'
import pluginStyle from './public/title.scss'

export default class TitlePlugin extends UIContainerPlugin {
  get name() { return 'title' }
  get supportedVersion() { return { min: CLAPPR_CORE_VERSION }; }

  get attributes() {
    return {
      'class': 'player-title',
      'data-title': ''
    }
  }

  constructor(container) {
    super(container)
    this.render()
  }

  bindEvents() {
    this.listenTo(this.container, Events.CONTAINER_MEDIACONTROL_SHOW, this.showTitle)
    this.listenTo(this.container, Events.CONTAINER_MEDIACONTROL_HIDE, this.hideTitle)
    this.listenTo(this.container, Events.CONTAINER_OPTIONS_CHANGE, this.render)
  }

  showTitle() {
    this.$el.removeClass('player-title-hide')
  }

  hideTitle() {
    this.$el.addClass('player-title-hide')
  }

  render() {
    if (this.options.title) {
      this.$el.html(this.options.title)
      this.container.$el.append(this.el)
    } else {
      this.container.$('.player-title').remove()
    }

    return this
  }
}
