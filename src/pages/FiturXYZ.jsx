import { Button } from "@/components/ui/button";
import PageHeader from "../components/PageHeader";
import { Card, CardHeader, CardDescription, CardTitle, CardFooter, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FiturXyz() {
  return (
    <div id="dashboard-container">
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "FiturXyz"]} />
      <p>Ini halaman Fitur Xyz.</p>

      <Button variant="outline">simpan </Button>
      <Button variant="ghost">simpan </Button>
      <Button variant="destructive">simpan </Button>

      <Card className="mt-4 w-[380px]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Belajar shadcn/ui</CardTitle>
            <Badge variant="secondary">Baru</Badge>
          </div>
          <CardDescription>
            Contoh penggunaan komponen shadcn/ui di React
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Komponen ini dibuat di branch <strong>setup-shadcn</strong>
            lalu di-merge ke main.
          </p>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button>Simpan</Button>
          <Button variant="outline">Batal</Button>
        </CardFooter>
      </Card>
    </div>
  );
}