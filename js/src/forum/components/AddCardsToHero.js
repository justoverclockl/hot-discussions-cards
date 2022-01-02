import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import avatar from 'flarum/common/helpers/avatar';
import tagsLabel from 'flarum/tags/helpers/tagsLabel';

export default class AddCardsToHero extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.discPreview = [];
    this.loading = true;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    const limitHotDisc = 3;

    app.store
      .find('discussions', {
        sort: '-createdAt',
        page: { limit: limitHotDisc },
        include: 'firstPost,user,tags',
      })
      .then((results) => {
        this.discPreview = results;
        this.loading = false;
        m.redraw();
      });
  }

  view() {
    return (
      <div className="cardContainer">
        <section className="cards-wrapper">
          {this.discPreview &&
            this.discPreview.map((prevDisc) => {
              return (
                <div className="card-grid-space">
                  <Link className="card" href={app.route.discussion(prevDisc)}>
                    <div className="arrow-right">
                      <span>{app.translator.trans('justoverclock-hot-discussion-cards.forum.hot')}</span>
                    </div>
                    <div className="avatarDisplay">
                      {avatar(prevDisc.user(), {
                        title: prevDisc.user().displayName(),
                        className: 'lastPostedUserAvatartwo',
                      })}
                      <div className="postInfoCard">{prevDisc.commentCount()}</div>
                      <div className="postInfoCard text">{app.translator.trans('justoverclock-hot-discussion-cards.forum.post', {count: prevDisc.commentCount()})}</div>
                    </div>
                    <div>
                      <h5 className="discTitleCard">{prevDisc.title()}</h5>
                      <p className="discPcard">
                        {prevDisc.firstPost().contentHtml()
                          .replace(/<\/?[^>]+(>|$)/g, '')
                          .substr(0, 110) + '...'}
                      </p>
                      <div className="tagsna">{tagsLabel(prevDisc.tags(), {
                        link: true,
                        className: 'mytagLabel',
                      })}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </section>
      </div>
    );
  }
}
