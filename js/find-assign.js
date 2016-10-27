const _ = require('lodash');

// map, reduce, filter
// find, omit



const configBlogStats = [
  {blog: 'C', minLikes: 10}
];


const realBlogStats = [
  {blog: 'A', likes: 15},
  {blog: 'B', likes: 10},
  {blog: 'C' , likes: 0},
  {blog: 'D', likes: 5}
];

function filterBlogs(config, blogs) {
  return _.map(blogs, function(blogStat) {
    const config = _.find(configBlogStats, function(blogConfig) {return blogConfig.blog === blogStat.blog});
    if(config){
      // check for likes
      const configLikes = config.minLikes;
      const blogLikes = blogStat.likes;
      if(blogLikes > configLikes) {
        return blogStat;
      } else {
        return _.assign({}, blogStat, {likes: configLikes});
      }
    }
    return blogStat;
  });
}

console.log('hello');
console.log(filterBlogs(configBlogStats, realBlogStats));

/* 
[
  {blog: 'A', likes: 15},
  {blog: 'B', likes: 10},
  {blog: 'C' , likes: 10},
  {blog: 'D', likes: 5}
]
*/
