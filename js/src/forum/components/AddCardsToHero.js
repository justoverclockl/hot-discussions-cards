import app from 'flarum/forum/app'
import Component from 'flarum/common/Component';
import Link from "flarum/common/components/Link";
import avatar from 'flarum/common/helpers/avatar';

export default class AddCardsToHero extends Component {

  oninit(vnode) {
    super.oninit(vnode);
    this.discPreview = [];
    this.loading = true;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    const limitHotDisc = 3;
    // get discussions object
    app.store
      .find('discussions', {
        sort: '-commentCount',
        page: { limit: limitHotDisc },
        include: 'firstPost,user'
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
          {this.discPreview && this.discPreview.map((prevDisc) => {
            console.log(prevDisc.user())
            return (
              <div className="card-grid-space">
                <Link className="card" href={app.route.discussion(prevDisc)}>
                  <div className="avatarDisplay">{avatar(prevDisc.user(), { title: '', className: 'lastPostedUserAvatartwo' })}</div>
                  <div>
                    <h5>{prevDisc.title()}</h5>
                    <p>{prevDisc.firstPost().contentHtml().replace(/<\/?[^>]+(>|$)/g, "").substr(0, 80) + "..."}</p>
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
