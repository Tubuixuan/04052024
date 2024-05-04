def tinhGiaiThua(n):
    if n == 0:
        return 1
    else:
        return n *tinhGiaiThua(n-1)

ketQua = tinhGiaiThua(5)
print(ketQua)