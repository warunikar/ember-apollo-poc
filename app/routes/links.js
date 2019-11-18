import Route from '@ember/routing/route';
import query from '../gql/queries/allLinks';
import { queryManager } from "ember-apollo-client";

export default Route.extend({
  apollo: queryManager(),
  model() {
    return this.apollo.watchQuery({ query }, 'allLinks');
  }
});
