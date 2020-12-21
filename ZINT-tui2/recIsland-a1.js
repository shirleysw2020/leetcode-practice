/*
Given a matrix of 1s and 0s with 0s representing a  rectangle, find its coordinates and dimentions.

第一题 :
先是一个01矩阵里找一个rectangle的岛的坐标
第二题:
找两个岛的坐标，然后followup，找不定数目的岛。第三个代码没写完。记得好像是找每个岛的上下左右界，不仅仅是单纯的岛的个数。
第三题:
Intuit 网上coding competition的一道题给一个矩阵，矩阵里的每个元素是1，但是其中分布着一些长方形区域， 这些长方形区域中的元素为0. 要求输出每个长方形的位置（用长方形的左上角元素坐标和右下角元素坐标表示）。
example：
input:.
[
[1,1,1,1,1,1],
[0,0,1,0,1,1],
[0,0,1,0,1,0],
[1,1,1,0,1,0],
[1,0,0,1,1,1]
].
output:
[
[1,0,2,1],
[1,3,3,3],
[2,5,3,5],
[4,1,4,2]
]
如果 Matrix 中有多个由0组成的长方体，请返回多套值（前提每两个长方体之间是不会连接的，所以放心）. 不改变输入的做法
不过还有第三问，就是connected components
第三问 基本上就是leetcode connected components,只不过是返回一个listoflist，每个list是一个component的所有点坐标
那个图是1,01,0组成的矩阵，0组成的就是各种图形。跟前面关系的确不大
如果矩阵里有多个不规则的形状，返回这些形状。这里需要自己思考并定义何谓“返回这些形状”

*/