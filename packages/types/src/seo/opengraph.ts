import type { OpenGraph, OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'

/**
 * Reference interface to access OpenGraph types
 *
 * export type OpenGraphType = 'article' | 'book' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'profile' | 'website' | 'video.tv_show' | 'video.other' | 'video.movie' | 'video.episode';
 * see {@link https://ogp.me/}
 */
export interface MyExampleParams {
  openGraphArticle: Extract<OpenGraph, { type: 'article' }>
  openGraphType: OpenGraphType
}
// type OpenGraphType =
//   | 'article'
//   | 'book'
//   | 'music.song'
//   | 'music.album'
//   | 'music.playlist'
//   | 'music.radio_station'
//   | 'profile'
//   | 'website'
//   | 'video.tv_show'
//   | 'video.other'
//   | 'video.movie'
//   | 'video.episode'
